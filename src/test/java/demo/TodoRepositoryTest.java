package demo;

import javax.validation.ValidationException;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ShoulditDemoApplication.class)
@WebAppConfiguration
public class TodoRepositoryTest {

	@Autowired
	private TodoRepository todoRepository;

	@Test(expected = ValidationException.class)
	public void descrizioneNotNull() {
		Todo todo = new Todo();
		todoRepository.save(todo);
	}

}
