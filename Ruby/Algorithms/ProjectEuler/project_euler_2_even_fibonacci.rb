class Fibbing
  def initialize max
    @num_one = 0
    @i = 0
    @sum = 0
    @num_two = 1
    @max = max
  end

  def even_fibonacci
    while @i <= @max
      @i = @num_one + @num_two

      @sum += @i if @i % 2 == 0

      @num_one = @num_two

      @num_two = @i
    end
    @sum
  end
end

result = Fibbing.new(4_000_000)
p result.even_fibonacci
