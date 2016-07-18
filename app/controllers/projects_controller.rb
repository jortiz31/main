class ProjectsController < ApplicationController
  PAGE_SIZE = 10
  def index
    @projects = Project.all.limit(10)
    @page = (params[:page] || 0).to_i
    if params[:keywords].present?
      @keywords = params[:keywords]
      project_search_term = ProjectSearchTerm.new(@keywords)
      @projects = Project.where(
          project_search_term.where_clause,
          project_search_term.where_args).
        order(project_search_term.order).
        offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
    else
      @projects = []
    end

    respond_to do|format|
      format.html {}
      format.json {render json: @projects}
    end
  end

  def show
    project = Project.find(params[:id])
    respond_to do |format|
      format.json {render json: project}
    end
  end
end
