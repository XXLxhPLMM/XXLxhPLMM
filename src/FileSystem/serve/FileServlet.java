package FileSystem.serve;

import FileSystem.Fileio.DocPut;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.ws.Action;
import java.io.IOException;

public class FileServlet extends HttpServlet {
    private DocPut docPut = new DocPut();

    @Override
    public void init() throws ServletException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        render(response,"text/json;charset=UTF-8", docPut.putfile());
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }

    private void render(HttpServletResponse response, String contentType, String s1) {
        response.setContentType(contentType);
        try {
            response.getWriter().print(s1);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void destroy() {

    }
}
