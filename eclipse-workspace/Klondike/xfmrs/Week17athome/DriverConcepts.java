package Week17athome;

import io.github.bonigarcia.wdm.WebDrivermanager;
public class DriverConcepts {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.setProperty("weddriver.chrome.driver",".//drivers/chromedriver.exe", null);
		WebDriver driver = new ChromeDriver();
		driver.get("hotmail.com");
	}

}
