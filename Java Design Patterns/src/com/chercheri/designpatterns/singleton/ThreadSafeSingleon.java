package com.chercheri.designpatterns.singleton;

public class ThreadSafeSingleon {

    private static ThreadSafeSingleon instance;

    private ThreadSafeSingleon(){
    }

    public static synchronized ThreadSafeSingleon getInstance() {
        if (instance == null) {
            instance = new ThreadSafeSingleon();
            System.out.println("Thred safe new instnace");
            return  instance;
        }
        System.out.println("Returning Thread safe Instance");
        return  instance;
    }
}
