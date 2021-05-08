package com.telia.dictionary.dataclass;


import javax.persistence.*;

@Entity
@Table(name = "dictionary")
public class DictionaryEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String estonian;

    private String english;


    public DictionaryEntry(String estonian, String english) {
        this.estonian = estonian;
        this.english = english;
    }

    public DictionaryEntry() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEstonian() {
        return estonian;
    }

    public void setEstonian(String estonian) {
        this.estonian = estonian;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }
}
