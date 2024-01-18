package com.chercheri.designpatterns.Factory.exemple2;

public class Rectangle implements Forme {

    @Override
    public void dessiner() {
        System.out.println("Je dessine l'objet Rectangle");
    }
}
