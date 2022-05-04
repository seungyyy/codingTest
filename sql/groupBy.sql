-- 고양이와 개는 몇 마리 있을까 https://programmers.co.kr/learn/courses/30/lessons/59040
--  ANIMAL_INS 테이블 동물 보호소에 들어온 동물 중 고양이와 개가 각각 몇 마리인지 조회하는 SQL문을 작성해주세요. 이때 고양이를 개보다 먼저 조회해주세요.

SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE)
FROM ANIMAL_INS
WHERE ANIMAL_TYPE IN ('Cat', 'Dog')
GROUP BY 1
ORDER BY 1



----------------------------------------------------------------------------------------------
-- 동명 동물 수 찾기 https://programmers.co.kr/learn/courses/30/lessons/59041
-- ANIMAL_INS 테이블 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요. 이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요

SELECT NAME, COUNT(NAME) AS COUNT
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
GROUP BY NAME
HAVING COUNT(NAME) > 1
ORDER BY NAME ASC



----------------------------------------------------------------------------------------------
-- 입양 시각구하기(1) https://programmers.co.kr/learn/courses/30/lessons/59412
-- ANIMAL_OUTS 테이블  09:00부터 19:59까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

SELECT DATE_FORMAT(DATETIME, '%H') AS HOUR,
COUNT(DATE_FORMAT(DATETIME, '%H')) AS COUNT
FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING HOUR >= 9
AND HOUR < 20
ORDER BY HOUR ASC



----------------------------------------------------------------------------------------------
-- 입양 시각구하기(2) https://programmers.co.kr/learn/courses/30/lessons/59413
-- ANIMAL_OUTS 테이블   0시부터 23시까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

WITH RECURSIVE CTE AS (
  SELECT 0 AS HOUR
  UNION ALL   
  SELECT HOUR +1 FROM CTE
  WHERE HOUR < 23
)
SELECT HOUR, COUNT(HOUR(DATETIME)) AS 'COUNT' FROM CTE
  LEFT OUTER JOIN ANIMAL_OUTS
  ON HOUR(DATETIME) = HOUR
GROUP BY HOUR
ORDER BY HOUR