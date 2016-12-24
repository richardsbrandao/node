require 'benchmark'
require 'net/http'

n = 1_000
uri = URI('http://localhost:9000/api/users/582b97d5251037f690dfa98f')

Benchmark.bm do |x|
  	x.report do
  		n.times do  
  			Net::HTTP.get(uri)
  		end
	end
end