package com.niavok.bomb;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.support.annotation.IdRes;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.os.Handler;
import android.view.MotionEvent;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;

/**
 * An example full-screen activity that shows and hides the system UI (i.e.
 * status bar and navigation/system bar) with user interaction.
 */
public class BombActivity extends AppCompatActivity {
    /**
     * Whether or not the system UI should be auto-hidden after
     * {@link #AUTO_HIDE_DELAY_MILLIS} milliseconds.
     */
    private static final boolean AUTO_HIDE = true;

    /**
     * If {@link #AUTO_HIDE} is set, the number of milliseconds to wait after
     * user interaction before hiding the system UI.
     */
    private static final int AUTO_HIDE_DELAY_MILLIS = 3000;

    /**
     * Some older devices needs a small delay between UI widget updates
     * and a change of the status and navigation bar.
     */
    private static final int UI_ANIMATION_DELAY = 300;
    private final Handler mHideHandler = new Handler();
    private View mContentView;
    private final Runnable mHidePart2Runnable = new Runnable() {
        @SuppressLint("InlinedApi")
        @Override
        public void run() {
            // Delayed removal of status and navigation bar

            // Note that some of these constants are new as of API 16 (Jelly Bean)
            // and API 19 (KitKat). It is safe to use them, as they are inlined
            // at compile-time and do nothing on earlier devices.
            mContentView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LOW_PROFILE
                    | View.SYSTEM_UI_FLAG_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION);
        }
    };
    private View mControlsView;
    private final Runnable mShowPart2Runnable = new Runnable() {
        @Override
        public void run() {
            // Delayed display of UI elements
            ActionBar actionBar = getSupportActionBar();
            if (actionBar != null) {
                actionBar.show();
            }
            mControlsView.setVisibility(View.VISIBLE);
        }
    };
    private boolean mVisible;
    private final Runnable mHideRunnable = new Runnable() {
        @Override
        public void run() {
            hide();
        }
    };
    /**
     * Touch listener to use for in-layout UI controls to delay hiding the
     * system UI. This is to prevent the jarring behavior of controls going away
     * while interacting with activity UI.
     */
    private final View.OnTouchListener mDelayHideTouchListener = new View.OnTouchListener() {
        @Override
        public boolean onTouch(View view, MotionEvent motionEvent) {
            if (AUTO_HIDE) {
                delayedHide(AUTO_HIDE_DELAY_MILLIS);
            }
            return false;
        }
    };
    private Handler mBlinker;
    private ImageView mImageBlink;

    private Bomb mBomb;
    private ImageButton[] mButtons = new ImageButton[16];


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_bomb);

        mVisible = true;
        mControlsView = findViewById(R.id.fullscreen_content_controls);
        mContentView = findViewById(R.id.fullscreen_content);
        mImageBlink = (ImageView) findViewById(R.id.blink);


        loadButton(0, R.id.toggleButton0);
        loadButton(1, R.id.toggleButton1);
        loadButton(2, R.id.toggleButton2);
        loadButton(3, R.id.toggleButton3);
        loadButton(4, R.id.toggleButton4);
        loadButton(5, R.id.toggleButton5);
        loadButton(6, R.id.toggleButton6);
        loadButton(7, R.id.toggleButton7);
        loadButton(8, R.id.toggleButton8);
        loadButton(9, R.id.toggleButton9);
        loadButton(10, R.id.toggleButton10);
        loadButton(11, R.id.toggleButton11);
        loadButton(12, R.id.toggleButton12);
        loadButton(13, R.id.toggleButton13);
        loadButton(14, R.id.toggleButton14);
        loadButton(15, R.id.toggleButton15);

        // Set up the user interaction to manually show or hide the system UI.
        mContentView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //toggle();
            }
        });

        // Upon interacting with UI controls, delay any scheduled hide()
        // operations to prevent the jarring behavior of controls going away
        // while interacting with the UI.
        findViewById(R.id.dummy_button).setOnTouchListener(mDelayHideTouchListener);


        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);

        mBomb = new Bomb();

        mBlinker = new Handler();
        mBlinker.post(mBlinkOn);

        updateButtons();

    }

    private void loadButton(final int index, @IdRes int id)
    {
        mButtons[index] = (ImageButton) findViewById(id);
        mButtons[index].setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mBomb.SwitchCable(index);
                updateButtons();

                //startActivity(new Intent(BombActivity.this, FullscreenActivity.class));
            }
        });
    }


    private void updateButtons()
    {
        for(int i = 0; i < 16 ; i++)
        {
            if(mButtons[i] == null)
            {
                continue;
            }


            if(mBomb.IsCablePluged(i)) {
                mButtons[i].setBackground(getResources().getDrawable(R.drawable.bomb_on));
            }
            else
            {
                mButtons[i].setBackground(getResources().getDrawable(R.drawable.bomb_off));
            }
        }

    }




    Runnable mBlinkOn = new Runnable() {
        @Override
        public void run() {
            try {
                if(mBomb.IsActive()) {
                    mImageBlink.setVisibility(View.VISIBLE);
                }
            } finally {
                // 100% guarantee that this always happens, even if
                // your update method throws an exception
                mBlinker.postDelayed(mBlinkOff, 50);
            }
        }
    };

    Runnable mBlinkOff = new Runnable() {
        @Override
        public void run() {
            try {
                mImageBlink.setVisibility(View.INVISIBLE);
            } finally {
                // 100% guarantee that this always happens, even if
                // your update method throws an exception
                mBlinker.postDelayed(mBlinkOn, 1000);
                delayedHide(0);
            }
        }
    };



    @Override
    protected void onPostCreate(Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);

        // Trigger the initial hide() shortly after the activity has been
        // created, to briefly hint to the user that UI controls
        // are available.
        delayedHide(0);
    }

    private void toggle() {
        if (mVisible) {
            hide();
        } else {
            show();
        }
    }

    private void hide() {
        // Hide UI first
        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.hide();
        }
        mControlsView.setVisibility(View.GONE);
        mVisible = false;

        // Schedule a runnable to remove the status and navigation bar after a delay
        mHideHandler.removeCallbacks(mShowPart2Runnable);
        mHideHandler.postDelayed(mHidePart2Runnable, UI_ANIMATION_DELAY);
    }

    @SuppressLint("InlinedApi")
    private void show() {
        // Show the system bar
        mContentView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
        mVisible = true;

        // Schedule a runnable to display UI elements after a delay
        mHideHandler.removeCallbacks(mHidePart2Runnable);
        mHideHandler.postDelayed(mShowPart2Runnable, UI_ANIMATION_DELAY);
    }

    /**
     * Schedules a call to hide() in [delay] milliseconds, canceling any
     * previously scheduled calls.
     */
    private void delayedHide(int delayMillis) {
        mHideHandler.removeCallbacks(mHideRunnable);
        mHideHandler.postDelayed(mHideRunnable, delayMillis);
    }
}

