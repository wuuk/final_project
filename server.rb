require 'sinatra'
require 'httparty'
require 'JSON'
require 'pry'

apikey = "6czx2pst57j3g47cvq9erte5";

get '/' do
	File.read('./public/index.html')
end

get '/movie_info/:title' do
	response = HTTParty.get("http://api.rottentomatoes.com/api/public/v1.0/movies.json/?apikey=" + apikey + "&q=" + params[:title]);
	response = JSON.parse(response)
	response.to_json
end

get '/top_movies' do
	response = HTTParty.get("http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=" + apikey);
	response = JSON.parse(response)
	response.to_json
end