//march 5 2025 bus DC to Brokenland p&r
import 
  public static void main(String[] args) throws IOException {
		// march 6 335 cooy from Magician

		WebDriverManager.edgedriver().setup();
		WebDriver driver = new EdgeDriver();
		//driver.manage().window().maximize(); Jan 25 add screen shots
		 // Jan23, this runs from main directory, comment out in porm.xml
		 driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		 driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
		driver.get("https://www.hotmail.com");
