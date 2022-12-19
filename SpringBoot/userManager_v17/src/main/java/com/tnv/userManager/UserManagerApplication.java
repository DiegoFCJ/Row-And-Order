package com.tnv.userManager;

import com.tnv.userManager.model.User;
import com.tnv.userManager.model.UsersRoles;
import com.tnv.userManager.repository.UserRepository;
import jakarta.mail.MessagingException;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Random;

@SpringBootApplication
public class UserManagerApplication {

	public static void main(String[] args) throws MessagingException {

		SpringApplication.run(UserManagerApplication.class, args);
	}

	@Bean
	static CommandLineRunner commandLineRunner(UserRepository users) {
		return args -> {
			if(!users.adminAutoCreate(UsersRoles.ADMIN)){
				users.save(new User("admin", UsersRoles.ADMIN));
				users.save(new User("user", UsersRoles.USER));
				for(int i=0; i<150;) {
					users.save(new User(randomNamesCreator(), UsersRoles.USER));
					i++;
				}

			}
		};
	}

	public static String randomNamesCreator(){
		String[] namesList = {"bambi", "mari", "test", "ludo", "bibi", "doug", "papi", "mesa", "mery", "leon", "rope", "sell", "jason", "jackson"};

		return (char)(Math.random()*26+65) + namesList[new Random().nextInt(namesList.length)] + (char)(Math.random()*26+65) + (char)(Math.random()*26+65) + (int)(Math.random()*100);
	}

}
