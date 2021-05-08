package com.telia.dictionary.controller;

import com.telia.dictionary.dataclass.DictionaryEntry;
import com.telia.dictionary.service.DictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:3000")
public class MainController{

    @Autowired
    private DictionaryService dictionaryService;


    @PostConstruct
    public void init(){
        //Mock data
        dictionaryService.addEntry("tere","hi");
        dictionaryService.addEntry("rohi","grass");
        dictionaryService.addEntry("ema","mother");
    }

    @GetMapping("api/all")
    public ResponseEntity<?> getAll() {

        List<DictionaryEntry> entries = dictionaryService.getAll();
        return ResponseEntity.ok(entries);
    }

    @PostMapping(value = "api/create",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})

    public ResponseEntity<?> addNewEntry(@RequestBody DictionaryEntry entry){
        dictionaryService.addEntry(entry.getEstonian(),entry.getEnglish());
        return ResponseEntity.ok(entry);
    }

}
