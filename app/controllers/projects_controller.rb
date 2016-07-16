class ProjectsController < ApplicationController
  def index
    @page = (params[:page] || 0).to_i
    if params[:keywords].present?
      @keywords = params[:keywords]
      project_search_term = ProjectSearchTerm.new(@keywords)
      @projects = Project.where(
          project_search_term.where_clause,
          project_search_term.where_args).
        order(project_search_term.order)
    else
      @projects = []
    end

    respond_to do|format|
      format.html {}
      format.json {render json: @projects}
    end
  end
end
