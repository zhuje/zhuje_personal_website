import React from "react";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import {Link} from "react-router-dom";


// ModuleListComponent -- A stateless class component that can dynamically render the
// the list of modules for a course. The state is managed using redux. This ia a component
// of the CourseEditor Component
// @ course={} -- current course -- initialized as an empty object '={}' so that we don't crash if it is an empty object
// @ modules=[] -- list of modules for the course
// @ deleteModule, createModule, updateModule -- from service/ModuleServices (relay information to and from server)

const ModuleListComponent = (
  {
    course={},
    modules=[],
    deleteModule,
    createModule,
    updateModule,
    edit,
    ok,
}) =>
  <div>
    <h1>Modules for {course.title}</h1>
    <ul>
      {
        modules.map(module =>
          <li key={module._id}>
            <button
              onClick={() => deleteModule(module)}>
              Delete
            </button>
            {
              !module.editing &&
                <span>
                  <button onClick={() => edit(module)}>
                    <i className="fa fa-pencil"></i>
                  </button>
                  <Link to={`/edit/${course._id}/modules/${module._id}`}>
                    {module.title}
                  </Link>
                </span>
            }
            {
              module.editing &&
              <span>
                <button
                  onClick={() => ok(module)}>
                  Ok
                </button>
                <input
                  onChange={(event) => updateModule({
                    ...module,
                    title: event.target.value
                  })}
                  value={module.title}/>
              </span>
            }
          </li>
        )
      }
    </ul>
      {/* Pass the selected course so that we can create a new module for it ' createModule(course) */}
    <button
      onClick={() => createModule(course)}>
      Create
    </button>
  </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
  modules: state.moduleReducer.modules,
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  ok: (module) =>
    moduleService.updateModule(module._id, {
      ...module, editing: false
    }).then(status => dispatch({
      type: "UPDATE_MODULE",
      module: {...module, editing: false}
    })),
  edit: (module) =>
    moduleService.updateModule(module._id, {
      ...module, editing: true
    }).then(status =>
      dispatch({
      type: "UPDATE_MODULE",
      module: {...module, editing: true}
    })),
  deleteModule: (module) =>
    moduleService.deleteModule(module._id)
      .then(status => dispatch({
        type: "DELETE_MODULE",
        module: module
      })),
  createModule: (course) =>
    moduleService.createModuleForCourse(course._id, {
      title: "New Module"
    }).then(actualModule => dispatch({
      type: "CREATE_MODULE",
      module: actualModule
    })),
  updateModule: (module) =>
    dispatch({
      type: "UPDATE_MODULE",
      module: module
    })
    // moduleService.updateModule(module._id, module)
    //   .then(status => dispatch({
    //     type: "UPDATE_MODULE",
    //     module: module
    //   }))
})

export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(ModuleListComponent)
