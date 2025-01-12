package com.icyderdritte.backend.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler {

    /**
     * Handles illegal arguments
     *
     * @param exception the exception
     * @return a map with the error message with a status code 400
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public Map<String, String> handleIllegalArgumentException(IllegalArgumentException exception) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("error", exception.getMessage());
        return errorMap;
    }

}
