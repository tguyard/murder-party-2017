package com.niavok.bomb;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Vibrator;
import android.util.Log;

import java.util.Calendar;

import static android.content.Context.ALARM_SERVICE;

/**
 * Created by fred on 23/10/17.
 */

public class Bomb {

    private final Activity mParent;
    boolean[] cableState = new boolean[16];

    int[] route = new int[16];

    int[] commandMask = new int[6];
    int[] dataMask = new int[10];

    boolean active = false;
    private PendingIntent mPendingIntent;
    private long mExplosionTime = 0;
    private boolean explosed = false;

    Bomb(Activity parent)
    {
        mParent = parent;
        for (int i = 0; i < 16; i++) {
            cableState[i] = true;
        }

        // Command
        route[0] = 1;
        route[1] = 2;
        route[2] = 9;
        route[3] = 10;
        route[4] = 11;
        route[5] = 13;

        // Data
        route[6] = 0;
        route[7] = 3;
        route[8] = 4;
        route[9] = 5;
        route[10] = 6;
        route[11] = 7;
        route[12] = 8;
        route[13] = 12;
        route[14] = 14;
        route[15] = 15;

        int mask = 0x1;
        for (int i = 0; i < 6; i++) {
            commandMask[5-i] = mask;
            mask = mask << 1;
        }

        mask = 0x1;
        for (int i = 0; i < 10; i++) {
            dataMask[9-i] = mask;
            mask = mask << 1;
        }

        Update();
    }

    public boolean IsExplosed()
    {
        if(!explosed && active)
        {
            if(mExplosionTime < System.currentTimeMillis())
            {
                explosed = true;
                active = false;
                Vibrator v = (Vibrator) mParent.getSystemService(Context.VIBRATOR_SERVICE);
                v.vibrate(5000);

            }
        }
        return explosed;
    }

    public boolean IsActive()
    {
        return active;
    }

    public boolean IsNearExplosion()
    {
        return mExplosionTime - System.currentTimeMillis() < 60 * 60 * 1000;
    }

    public void SwitchCable(int index)
    {
        if(IsExplosed())
        {
            return;
        }

        Vibrator v = (Vibrator) mParent.getSystemService(Context.VIBRATOR_SERVICE);
        v.vibrate(100);

        cableState[index] = !cableState[index];
        Update();
    }

    public boolean IsCablePluged(int index) {
        return cableState[index];
    }

    public void Update()
    {


        Log.d("State", "Cables:");
        for(int i = 0; i < 16; i++)
        {
            Log.d("State", " - "+ i +": "+ cableState[i]);
        }

        int command = GetCommand();

        Log.d("State", "Command: " + command);
        for(int i = 0; i < 6; i++)
        {
            Log.d("State", " - "+ i +": "+ GetCommandBit(i));
        }

        int data = GetData();


        Log.d("State", "Data: " + data);
        for(int i = 0; i < 10; i++)
        {
            Log.d("Data", " - "+ i +": "+ GetDataBit(i));
        }

        if(active && command == 53)
        {
            active = false;
            Log.d("State", "Bomb defused");
        }

        if(!active && command == 15 && data > 0)
        {
            active = true;
            Log.d("State", "Bomb armed for " + data+ " minutes");
            setupAlarm(data);
        }

    }

    public boolean GetCommandBit(int index) {
        return cableState[route[index]];
    }

    public boolean GetDataBit(int index) {
        return cableState[route[index+6]];
    }

    public int GetCommand() {
        int command = 0;
        for(int i = 0; i < 6; i++) {
            boolean bit = GetCommandBit(i);
            if(bit) {
                command += commandMask[i];
            }
        }
        return command;
    }

    public int GetData() {
        int data = 0;
        for(int i = 0; i < 10; i++) {
            boolean bit = GetDataBit(i);
            if(bit) {
                data += dataMask[i];
            }
        }
        return data;
    }

    private void setupAlarm(int minutes) {
        mExplosionTime = System.currentTimeMillis() + minutes * 60 * 1000;
    }

    static final String STATE_EXPLOSION_TIME = "explosion_time";
    static final String STATE_ACTIVE= "active";
    static final String STATE_EXPLOSED = "explosed";
    static final String STATE_CABLE = "cabes";



    public void Restore(Bundle savedInstanceState) {

        if(savedInstanceState == null)
        {
            return;
        }

        mExplosionTime = savedInstanceState.getLong(STATE_EXPLOSION_TIME, 0);
        explosed = savedInstanceState.getBoolean(STATE_EXPLOSED, false);
        active = savedInstanceState.getBoolean(STATE_ACTIVE, false);

        boolean[] oldCableState = savedInstanceState.getBooleanArray(STATE_CABLE);
        if(oldCableState != null) {
            cableState = oldCableState;
        }
    }

    public void Save(Bundle savedInstanceState) {
        savedInstanceState.putLong(STATE_EXPLOSION_TIME, mExplosionTime);
        savedInstanceState.putBoolean(STATE_EXPLOSED, explosed);
        savedInstanceState.putBoolean(STATE_ACTIVE, active);
        savedInstanceState.putBooleanArray(STATE_CABLE, cableState);
    }

    public void Reset() {
        for (int i = 0; i < 16; i++) {
            cableState[i] = false;
        }

        active = true;
        explosed = false;
        setupAlarm(288);

        Log.d("State", "Bomb reset");
        Update();
    }
}
