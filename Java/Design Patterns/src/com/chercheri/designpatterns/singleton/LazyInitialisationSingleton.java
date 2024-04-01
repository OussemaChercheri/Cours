package com.chercheri.designpatterns.singleton;

public class LazyInitialisationSingleton {

    private static LazyInitialisationSingleton instance;

    private LazyInitialisationSingleton() {
    }

    public static LazyInitialisationSingleton getInstance() {
        if (instance == null) {
            System.out.println("Creating new Instance of the class Lazy");
            instance = new LazyInitialisationSingleton();
            return instance;
        }
        System.out.println("Returning the Instance of the class Lazy");
        return instance;
    }
}
