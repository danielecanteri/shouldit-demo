package demo;

import static org.hamcrest.CoreMatchers.is;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

public class HomePageTest {

	@Test
	public void ilTitoloDeveEssereTodo() {
		WebDriver driver = new HtmlUnitDriver();
		driver.get("http://localhost:8080/index.html");
		Assert.assertThat(driver.getTitle(), is("Todo"));
	}
}
