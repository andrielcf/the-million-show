package com.themillionshow.themillionshow.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.themillionshow.themillionshow.entity.Question;
import com.themillionshow.themillionshow.repository.QuestionRepository;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;

    // Rota para buscar uma pergunta aleatória por dificuldade
    @GetMapping
    public Question getRandomQuestion(@RequestParam String difficulty) {
        List<Question> questions = questionRepository.findByDifficulty(difficulty);
        return questions.get(new Random().nextInt(questions.size()));
    }

    // Rota para validar uma resposta
    @PostMapping("/validate")
    public boolean validateAnswer(@RequestBody AnswerPayload payload) {
        Question question = questionRepository.findById(payload.getQuestionId()).orElseThrow();
        return question.getCorrectAnswer().equalsIgnoreCase(payload.getAnswer());
    }

    // Classe auxiliar para receber dados no POST
    public static class AnswerPayload {
        private Long questionId;
        private String answer;

        public Long getQuestionId() {
            return questionId;
        }

        public void setQuestionId(Long questionId) {
            this.questionId = questionId;
        }

        public String getAnswer() {
            return answer;
        }

        public void setAnswer(String answer) {
            this.answer = answer;
        }
    }
}
