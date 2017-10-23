package com.niavok.bomb;

/**
 * Created by fred on 23/10/17.
 */

public class Bomb {

    boolean[] cableState = new boolean[16];

    boolean active = true;

    Bomb()
    {
        for (int i = 0; i < 16; i++) {
            cableState[i] = true;
        }
    }

    public boolean IsActive()
    {
        return active;
    }

    public void SwitchCable(int index)
    {
        cableState[index] = !cableState[index];
    }

    public boolean IsCablePluged(int index) {
        return cableState[index];
    }
}
