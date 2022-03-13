package com.icaro.server.entities.enums;

public enum ClienteStatus {

    DESATIVADO(0),
    ATIVADO(1),
    SUSPENSO(2);

    private int code;

    private ClienteStatus(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static ClienteStatus valueOf(int code) {
        for (ClienteStatus value : ClienteStatus.values()) {
            if (value.getCode() == code) {
                return value;
            }
        }
        throw new IllegalArgumentException("Invalid Cliente Status code.");
    }
}
