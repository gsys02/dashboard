package sys02.web.logout;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.jasig.cas.client.session.SingleSignOutHandler;
import org.pac4j.cas.client.CasClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//@Controller
public class Logout {

	

	
	//@RequestMapping("/logout")
	public String logout(HttpServletRequest request,
			HttpServletResponse response, HttpSession session) {

		
		
		
		/*
		session.invalidate();

		Cookie[] cookies = request.getCookies();
		if (cookies != null)
			for (int i = 0; i < cookies.length; i++) {
				cookies[i].setValue("");
				cookies[i].setPath("/");
				cookies[i].setMaxAge(0);
				response.addCookie(cookies[i]);
			}
			*/

		return "redirect:https://gnextia.com/cas/logout";
	}
}
