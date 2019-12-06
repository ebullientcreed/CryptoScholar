package com.blockchain.komodoConnect.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.komodoConnect.service.KomodoService;
import com.komodo.api.models.Configurations;
import com.komodo.api.models.OutputModel;
import com.komodo.api.models.wallet.ListReceivedByAddressOutputModel;
import com.komodo.api.models.wallet.ListTransactionsOutputModel;
import com.komodo.api.models.wallet.WalletInfoOutputModel;
import com.komodo.api.models.wallet.ZListReceivedByAddressOutputModel;
import com.komodo.api.sections.WalletApi;
@RestController
public class KomodoAPIController {
	@Autowired
	KomodoService komodoService;
	@RequestMapping("/getwalletinfo")
	public List<WalletInfoOutputModel> getWalletInfo() {
		Configurations config=new Configurations();
		komodoService.komodoConnect(config);
        WalletApi wallet = new WalletApi();
        //GetAddressBalanceOutputModel output = address.getAddressBalance(config, addresses);
        //OutputModel balO=wallet.getBalance(config);
        WalletInfoOutputModel m=wallet.getWalletInfo(config);
        List<WalletInfoOutputModel> resultList=new ArrayList<WalletInfoOutputModel>();
        resultList.add(m);
        return resultList;
    }
	@RequestMapping("/getbalance")
	public List<OutputModel> getBalance() {
		Configurations config=new Configurations();
		komodoService.komodoConnect(config);
        WalletApi wallet = new WalletApi();
        //GetAddressBalanceOutputModel output = address.getAddressBalance(config, addresses);
        OutputModel balance=wallet.getBalance(config);   
        ListTransactionsOutputModel transactions= wallet.listTransactions(config);
        List<OutputModel> resultList=new ArrayList<OutputModel>();
        resultList.add(balance);
        return resultList;
    }
	@RequestMapping("/gettransactions")
	public List<ListTransactionsOutputModel> getTransactions() {
		Configurations config=new Configurations();
		komodoService.komodoConnect(config);
        WalletApi wallet = new WalletApi();
        //GetAddressBalanceOutputModel output = address.getAddressBalance(config, addresses);
        ListTransactionsOutputModel transactions= wallet.listTransactions(config);
        List<ListTransactionsOutputModel> resultList=new ArrayList<ListTransactionsOutputModel>();
        resultList.add(transactions);
        return resultList;
    }
	@RequestMapping("/getreceivedbyaddress")
	public List<ZListReceivedByAddressOutputModel> getReceivedByAddress() {
		Configurations config=new Configurations();
		komodoService.komodoConnect(config);
        WalletApi wallet = new WalletApi();
        //GetAddressBalanceOutputModel output = address.getAddressBalance(config, addresses);
        ZListReceivedByAddressOutputModel listReceived= wallet.zListReceivedByAddress(config, "RLASPoYHP989GN64yckqwpFG7TWbDxKyJ5", 1);
        List<ZListReceivedByAddressOutputModel> resultList=new ArrayList<ZListReceivedByAddressOutputModel>();
        resultList.add(listReceived);
        return resultList;
    }
	@RequestMapping(value = "/sendtoaddress/{amount}")
	public Boolean updateUser(@PathVariable("amount") long amount) {
		Configurations config=new Configurations();
		komodoService.komodoConnect(config);
		WalletApi wallet = new WalletApi();
		wallet.getBalance(config);  
		OutputModel omdl= wallet.sendToAddress(config, "RLASPoYHP989GN64yckqwpFG7TWbDxKyJ5", amount, "", "", false);
		return omdl==null;	
		
	}
}
