package com.chercheri.designpatterns.decorator;

public abstract class BoissonDecorateur extends Boisson {

    protected Boisson boisson;

    public BoissonDecorateur(Boisson boisson) {
        super();
        this.boisson = boisson;
    }

    public abstract String getDescirption();
}
