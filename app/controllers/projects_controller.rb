class ProjectsController < ApplicationController
  def index
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
  end
end
