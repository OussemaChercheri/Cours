package com.chercheri.designpatterns.singleton;

public class SingletonMain {

    public static void main(String[] args) {
        EagerInitializationSingleton.getInstance();
        StaticBlockInitializationSingleton.getInstance();
        LazyInitialisationSingleton.getInstance();
        LazyInitialisationSingleton.getInstance();

        for (int i =0; i<5; i++){
            ThreadSafeSingleon.getInstance();
        }

    }
}
