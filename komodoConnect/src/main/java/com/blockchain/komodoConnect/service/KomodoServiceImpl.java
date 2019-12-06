package com.blockchain.komodoConnect.service;

import org.springframework.stereotype.Service;

import com.komodo.api.models.Configurations;
@Service
public class KomodoServiceImpl implements KomodoService {
	@Override
	public void komodoConnect(Configurations config) {
		//Configurations config = new Configurations();
        config.setId("101");
        config.setIp("127.0.0.1");
        config.setPort("8129");
        config.setUsername("user64134737");
        config.setPassword("passb900d9347cd193549032e44c6764fdd6067727ea6a1b9ab4484ce2948dcccf9a2b");		
	}
}
/*
 * rpcuser=user2117477351
rpcpassword=pass9fc995ecfa6ed8905fdfecc8cb7660664ff8bbcc7d7a06fcb010af2fc69d2ded2c
rpcport=11143
server=1
txindex=1
rpcworkqueue=256
rpcallowip=127.0.0.1
rpcbind=127.0.0.1 */