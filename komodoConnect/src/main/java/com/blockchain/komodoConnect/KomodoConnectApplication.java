package com.blockchain.komodoConnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.blockchain.komodoConnect.service.KomodoServiceImpl;
import com.komodo.api.models.Configurations;

@SpringBootApplication
public class KomodoConnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(KomodoConnectApplication.class, args);		
	}

}
