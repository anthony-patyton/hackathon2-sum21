class Api::TrackersController < ApplicationController
  before_action :set_job
  before_action :set_tracker, only: [:show, :update, :destroy]

  def index
    render json: @job.trackers
  end

  def show
    render json: @tracker
  end

  def create
    @tracker = @job.trackers.new(tracker_params)
    if @tracker.save
      render json: @tracker
    else
      render json: {errors: @tracker.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @tracker.update(day_params)
      render json: @tracker
    else
      render json: {errors: @tracker.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @tracker.destroy
    render json: {message: 'Tracker deleted'}
  end

  private
    def set_job
      @job = Job.find(params[:job_id])
    end

    def set_tracker
      @tracker = @job.days.find(params[:id])
    end

    def tracker_params
      params.require(:tracker).permit(:steps_taken, :applied_status, :interview_date, :follow_up)
    end
end
