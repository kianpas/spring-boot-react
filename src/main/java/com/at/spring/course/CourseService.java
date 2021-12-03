package com.at.spring.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CourseService {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;

	static {
		courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and Angular"));
		courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and React"));
		courses.add(new Course(++idCounter, "in28minutes", "Master Microservices with Spring Boot and Spring Cloud"));
		courses.add(new Course(++idCounter, "in28minutes",
				"Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
		courses.add(new Course(++idCounter, "in28minutes", "Learn Full stack with Spring Boot and Vue"));
	}

	// 전체 조회
	public List<Course> findAll() {
		return courses;
	}

	// 아이디 값으로 찾기
	public Course findById(long id) {

		// 반복문으로 찾기
		for (Course course : courses) {
			if (course.getId() == id) {
				return course;
			}
		}

		return null;
	}

	// 아이디 값으로 찾고 삭제
	public Course deleteById(long id) {
		Course course = findById(id);

		// 없을 경우 null
		if (course == null) {
			return null;
		}

		// 삭제
		if (courses.remove(course)) {
			return course;
		}
		return null;
	}

	// 저장
	public Course save(Course course) {
		//기존 값이 없을 경우 
		if (course.getId() == -1 || course.getId() == 0) {
			course.setId(++idCounter);
			courses.add(course);
		} else {
			//기존 값이 없을 경우 수정
			deleteById(course.getId());
			courses.add(course);
		}

		return course;
	}
}
