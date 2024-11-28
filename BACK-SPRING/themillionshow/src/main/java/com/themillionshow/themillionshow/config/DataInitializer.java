package com.themillionshow.themillionshow.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.themillionshow.themillionshow.entity.Question;
import com.themillionshow.themillionshow.repository.QuestionRepository;

import java.util.Arrays;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(QuestionRepository questionRepository) {
        return args -> {
            questionRepository.save(new Question(
                null,
                "Qual é a capital da França?",
                "easy",
                "Paris",
                Arrays.asList("Londres", "Berlim", "Madrid")
            ));

            questionRepository.save(new Question(
                null,
                "Quantos planetas existem no sistema solar?",
                "medium",
                "8",
                Arrays.asList("7", "9", "10")
            ));

            questionRepository.save(new Question(
                null,
                "Qual a fórmula química da água?",
                "hard",
                "H2O",
                Arrays.asList("CO2", "O2", "NaCl")
            ));
        };
    }
}
