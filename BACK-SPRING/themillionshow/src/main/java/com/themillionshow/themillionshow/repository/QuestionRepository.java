package com.themillionshow.themillionshow.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.themillionshow.themillionshow.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByDifficulty(String difficulty);
}
