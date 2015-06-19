package demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api/todo")
public class TodoController {

	@Autowired
	private TodoRepository todoRepository;

	@RequestMapping(value = "/list")
	@ResponseBody
	public List<Todo> list() {
		return todoRepository.findAll();
	}

	@RequestMapping("/add")
	@ResponseBody
	public Todo add(String descrizione) {
		Todo todo = new Todo();
		todo.setDescrizione(descrizione);
		return todoRepository.save(todo);
	}

	@RequestMapping("/remove")
	@ResponseBody
	public void remove(Long id) {
		todoRepository.delete(id);
	}
}
