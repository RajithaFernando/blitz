package com.example.vue.demo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

import org.hibernate.annotations.GeneratorType;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Transactional
@org.springframework.transaction.annotation.Transactional
@Entity
@Table(name="flowchart")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Flowchart {
  
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long diagramId;

   @Column(length = 255)
    private String name;
    @Column(length = 3000) 
    private String diagram;
}
