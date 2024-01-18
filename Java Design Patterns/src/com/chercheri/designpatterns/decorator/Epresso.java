package com.chercheri.designpatterns.decorator;

public class Epresso extends Boisson{

    public Epresso(){
        description = "Espresso";
    }

    @Override
    public double cout(){
        return 6.5;
    }
}
