class Api::ReflectionsController < ApplicationController
  before_action :set_tracker
  before_action :set_reflection, only: [:show, :update, :destroy]

  def index
    render json: @tracker.reflections
  end

  def show
    render json: @reflection
  end

  def create
    @reflection = @tracker.days.new(reflection_params)
    if @reflection.save
      render json: @reflection
    else
      render json: {errors: @reflection.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @reflection.update(reflection_params)
      render json: @reflection
    else
      render json: {errors: @reflection.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @reflection.destroy
    render json: {message: 'Reflection deleted'}
  end

  private
    def set_tracker
      @tracker = Tracker.find(params[:tracker_id])
    end

    def set_reflection
      @reflection = @tracker.reflections.find(params[:id])
    end

    def reflection_params
      params.require(:reflection).permit(:summary, :did_right, :do_better)
    end
end
