package com.chercheri.designpatterns.Factory.exemple2;

public class FormeFactory {

    public static Forme getForme(String type){
        switch (type){
            case "cercle":
                return new Cercle();
            case "rectangle":
                return new Rectangle();
            case "carre":
                return new Carre();
            default:
                throw new IllegalArgumentException("Forme non supporte");
        }
    }
}
