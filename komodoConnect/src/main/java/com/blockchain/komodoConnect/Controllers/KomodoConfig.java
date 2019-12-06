///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package com.blockchain.komodoConnect.Controllers;
//
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.komodo.api.models.Configurations;
//import com.komodo.api.models.OutputModel;
//import com.komodo.api.models.address.*;
//import com.komodo.api.models.wallet.*;
//import com.komodo.api.sections.AddressApi;
//import com.komodo.api.sections.WalletApi;
//import java.util.List;
///**
// *
// * @author Thekku
// */
////@RestController
//public class KomodoConfig {
//    //@RequestMapping("/fire")
//    public int connect() {
////    	Configurations config = new Configurations();
////        config.setId("101");
////        config.setIp("127.0.0.1");
////        config.setPort("11312");
////        config.setUsername("user4030438090");
////        config.setPassword("pass8a4837c5aeda8f4da4bd60bfb16355b370bd0f8bcaf6b441f93681bf1bb3bbafc8");
//        WalletApi wallet = new WalletApi();
//        //GetAddressBalanceOutputModel output = address.getAddressBalance(config, addresses);
//        OutputModel balO=wallet.getBalance(config);
//        WalletInfoOutputModel m=wallet.getWalletInfo(config);
//        return m.getResult().getWalletVersion();
//    }
//}
