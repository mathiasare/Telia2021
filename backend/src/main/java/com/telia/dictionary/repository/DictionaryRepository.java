package com.telia.dictionary.repository;

import com.telia.dictionary.dataclass.DictionaryEntry;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DictionaryRepository extends CrudRepository<DictionaryEntry,Long> {

    public List<DictionaryEntry> findByEstonianOrderByEstonianAsc(String estonian);
}
