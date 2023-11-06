import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTeams } from "../../redux/actions/actions";
import { createDriver } from "../../redux/actions/actions";
import validations from "./validatiosn";
import styles from "./FormPage.module.css";
const FormPage = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const navigate = useNavigate();
  const [newDriver, setNewDriver] = useState({
    name: "",
    lastName: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "teams") {
      const selectedOptions = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );

      setNewDriver({
        ...newDriver,
        [name]: [...newDriver.teams, ...selectedOptions],
      });
    } else {
      setNewDriver({ ...newDriver, [name]: value });
    }
  };
  const handleRemoveTeam = (teamToRemove) => {
    const updatedTeams = newDriver.teams.filter(
      (team) => team !== teamToRemove
    );
    setNewDriver({
      ...newDriver,
      teams: updatedTeams,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDriver(newDriver));
    alert("Your driver has been created");
    navigate("/drivers");
  };

  useEffect(() => {
    dispatch(getAllTeams());
    if (
      newDriver.name === "" ||
      newDriver.lastName === "" ||
      newDriver.nationality === "" ||
      newDriver.dob === ""
    )
      setErrors(validations(newDriver));
  }, [newDriver]);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Create your Driver</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={newDriver.name}
            onChange={handleChange}
          />
        </div>
        {errors.name !== "" && <p className={styles.errors}>{errors.name}</p>}
        <div>
          <label>Lastname: </label>
          <input
            type="text"
            name="lastName"
            value={newDriver.lastName}
            onChange={handleChange}
          />
        </div>
        {errors.lastName !== "" && (
          <p className={styles.errors}>{errors.lastName}</p>
        )}
        <div>
          <label>Nationality: </label>
          <input
            type="text"
            name="nationality"
            value={newDriver.nationality}
            onChange={handleChange}
          />
        </div>
        {errors.nationality !== "" && (
          <p className={styles.errors}>{errors.nationality}</p>
        )}
        <div>
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={newDriver.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Day of Birth: </label>
          <input
            type="text"
            name="dob"
            value={newDriver.dob}
            onChange={handleChange}
          />
        </div>
        {errors.dob !== "" && <p className={styles.errors}>{errors.dob}</p>}
        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={newDriver.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teams: </label>
          <select type="checkBoxe" onChange={handleChange} name="teams">
            {teams
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((team, index) => (
                <option key={index} value={team.name}>
                  {team.name}
                </option>
              ))}
          </select>
        </div>
        <label>Teams selected: </label>
        {newDriver.teams.map((team, index) => (
          <div key={index}>
            {team}
            <button
              onClick={() => handleRemoveTeam(team)}
              className={styles.button2}
            >
              X
            </button>
          </div>
        ))}
        {errors.teams !== "" && <p className={styles.errors}>{errors.teams}</p>}
        <button
          type="submit"
          className={styles.button}
          disabled={
            !newDriver.name ||
            !newDriver.lastName ||
            !newDriver.nationality ||
            !newDriver.dob ||
            errors.name ||
            errors.lastName ||
            errors.nationality ||
            errors.dob ||
            errors.teams
          }
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default FormPage;
