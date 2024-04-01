package com.chercheri.designpatterns.decorator;

public abstract class Boisson {

    protected String description;

    public abstract double cout();

    public String getDescription() {
        return description;
    }
}
