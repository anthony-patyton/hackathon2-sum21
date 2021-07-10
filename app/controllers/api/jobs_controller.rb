class Api::JobsController < ApplicationController
  before_action :set_jobs, only: [:show, :update, :destroy]

  def index
    render json: current_user.jobs
  end

  def show
    render json: @job
  end

  def create
    @job = current_user.jobs.new(job_params)
    if @job.save
      render json: @job
    else
      render json: { errors: @job.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: { errors: @job.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @job.destroy
    render json: { message: "Job Deleted"}
  end

  private
    def set_job
      @job = current_user.jobs.find(params[:id])
    end

    def job_params
      params.require(:job).permit(:title, :company, :title_desc, :link_url, :end_date, :user_id)
    end
end
