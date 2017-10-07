# https://stackoverflow.com/questions/3668607/how-to-excute-commands-within-rake-tasks
task(:dev) do
  puts "start serve watch"
  sh('open http://127.0.0.1:4000/')
  sh('bundle exec jekyll serve --watch --limit_posts 1')
end

task(:build) do
  puts "start building"
  sh('fish')
  sh('subjpop')
end

