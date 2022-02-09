package FileSystem.Fileio;


import jdk.nashorn.internal.objects.Global;
import jdk.nashorn.internal.parser.JSONParser;
import jdk.nashorn.internal.runtime.Context;
import jdk.nashorn.internal.runtime.JSONFunctions;

import java.io.File;
import java.lang.reflect.Array;
import java.util.ArrayList;


public class DocPut {

    /**
     * 获取项目根目录
     */
    private String path = this.getClass().getResource("").getPath() + "../../../../doc";

    /**
     * 获得预先定义的文件目录
     *
     * @return 返回doc文档目录的次级目录json字符串数据
     */
    public String putfile() {
        return putfile(this.path);
    }
    /**
     * 获取自定义的文件目
     *
     * @param path 文件路径或者文件名
     * @return 返回文件目录结构
     */
    public String putfile(String path) {
        File f = new File(path);
        String strikeout = "";
        for (String s : f.list()) {
            File f2 = new File(this.path + "/" + s);
            String str2 = " ";
            if (f2.list() != null) {
                strikeout += "{\"name\":\"" + s + "\",\"child\":[";
                for (String s2 :
                        f2.list()) {
                    str2 += "\"" + s2 + "\",";
                }
                strikeout += str2.substring(0, str2.length() - 1) + "]},";
            } else {
                strikeout += "{\"name\":\"" + s + "\",\"child\":[]},";
            }

        }
        strikeout = strikeout.substring(0, strikeout.length() - 1);
        strikeout = "{\"path\":[" + strikeout + "]}";
        return strikeout;
    }

    /**
     * 获取预定义目录下的所有目录
     *
     * @return 返回目录结构 以 json形式
     */
    public String putAll() {

        return null;
    }

    /**
     * 获取自定义的目录下的所有目录
     *
     * @param path 自定义目录或文件
     * @return 返回目录的json格式
     */
    public String putAll(String path) {

        return path;
    }

    /**
     * 上传文件
     */
    public void addFile() {
    }

}
