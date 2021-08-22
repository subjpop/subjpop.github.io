# frozen_string_literal: true

# https://stackoverflow.com/questions/3668607/how-to-excute-commands-within-rake-tasks
desc 'Prepare the data'
task :prep do
  sh 'bundle exec ruby scripts/update_stream_yaml.rb'
  sh 'bundle exec ruby scripts/update_curated_websites.rb'
end

desc 'Start the dev server'
task dev: [:prep] do
  sh 'bundle exec jekyll serve --livereload --host localhost --open-url'
end

desc 'Build the site'
task :build do
  sh 'bundle exec jekyll build'
end

# https://www.danielsieger.com/blog/2021/03/28/check-broken-links-jekyll.html
desc 'Test the broken links'
task test: [:build] do
  sh 'bundle exec htmlproofer --assume_extension ./_site'
end
