module Jekyll
	class JsGenerator < Generator
		safe true
		priority :low

		def generate(site)
			motd  = "_plugins/resources/motd.txt"
			dst   = "js/motdSelector.js"

			# add new file to the list of static files
			site.static_files.push(JsFile.new(site, site.source, "", motd, dst))
		end
	end

	class JsFile < StaticFile
		def initialize(site, base, dir, motd, dst)
			super(site, base, dir, motd, nil)

			@srcMotd = File.join(base, motd)
			@dir = dir
			@dst = dst
		end

		def write(dest)
			dstPath = File.join(dest, @dir)
			dstName = File.join(dstPath, @dst)

			# make sure dir exists
			FileUtils.mkdir_p(dstPath)

			js = File.open(dstName, 'w')

			js.puts "var motdArr = ["

			txt = File.open(@srcMotd, 'r')
			txt.readlines.each do |line|
				js.puts "\t'" + line.strip.gsub("'", "\\\\'") + "',"
			end
			txt.close

			js.puts "];"

			js.puts "document.addEventListener('DOMContentLoaded', function() {"
			js.puts "\tvar index = Math.floor((Math.random() * motdArr.length));"
			js.puts "\tdocument.querySelector('#motd').innerHTML = '<span class=\"noselect\">&#12300; </span>' + motdArr[index] + '<span class=\"noselect\"> &#12301;</span>';"
			js.puts "});"

			js.close

			puts js
		end
	end

end
