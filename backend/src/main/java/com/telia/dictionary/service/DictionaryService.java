package com.telia.dictionary.service;


import com.telia.dictionary.dataclass.DictionaryEntry;
import com.telia.dictionary.repository.DictionaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DictionaryService {


    @Autowired
   private DictionaryRepository repo;

    public boolean addEntry(String estonian,String english){
        repo.save(new DictionaryEntry(estonian,english));
        return true; //TODO
    }

    public List<DictionaryEntry> getEntryByEstonian(String estonian){
        return repo.findByEstonianOrderByEstonianAsc(estonian);
        //TODO
    }

    public List<DictionaryEntry> getAll(){
        List<DictionaryEntry> res = new ArrayList<>();
        Iterable<DictionaryEntry>  it = repo.findAll(); //Ordered by Date for more convenient results
        it.forEach(res::add);

        return res;
    }



}
